import { call, put } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import base64 from "react-native-base64";
import { StackActions, NavigationActions } from "react-navigation";

import api from "~/services/api";

import meetupActions from "~/store/ducks/AddMeetup";

import {
  CAMPOSOBRIGATORIOS,
  ASYNCSTORAGE_USERS,
  ISNEWUSER,
  CREATEUSER,
  UPDATEUSERPREFS,
  MEETUPADD,
  MEETUPADDLOGO,
  USERSMEETUP
} from "react-native-dotenv";

export function* addMeetup({
  title,
  description,
  local,
  meetupDate,
  meetupLogo,
  devops,
  is_recommended,
  event_date,
  navigation
}) {
  try {
    //Trata o devops que vem com is_recommended = CBRC
    const devopsNew = String(devops).replace("CBRC", "");
    if (
      !title ||
      !description ||
      !local ||
      !meetupDate ||
      !meetupLogo ||
      !devopsNew
    ) {
      yield put(meetupActions.meetupFailure(CAMPOSOBRIGATORIOS));
      return false;
    }

    const postData = {
      title: title,
      description: description,
      meetup_logo: "-",
      address: local,
      devops: devopsNew,
      is_recommended: is_recommended,
      event_date: event_date
    };

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    };

    //Cadastra usuário e valida o cadastro
    const responseCreateMeetup = yield call(
      api.post,
      `/${MEETUPADD}`,
      postData,
      axiosConfig
    );

    if (JSON.stringify(responseCreateMeetup.data.codeError) === "401") {
      yield put(
        meetupActions.meetupFailure(
          JSON.stringify(responseCreateMeetup.data.error)
        )
      );
      return false;
    }

    /*
   *******************************************
   ABAIXO A IMAGEM DA MEETUP É ENVIADA CASO
   O REGISTRO ACIMA SEJA INSERIDO CORRETAMENTE
   *******************************************
  */

    const data = new FormData();
    data.append(
      `meetup_id:${responseCreateMeetup.data.id}<eof>`,
      meetupLogo,
      "file.jpg"
    );

    const updateImage = yield call(api.post, `/${MEETUPADDLOGO}`, data, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`
      },
      timeout: 30000
    });

    //salva na user_meetups com inscrito default null
    //pega no async o usuário logado
    const userId = yield AsyncStorage.getItem(ASYNCSTORAGE_USERS);

    if (!userId) {
      yield put(
        meetupActions.meetupFailure(
          JSON.stringify("erro ao salvar na tabela users_meetups")
        )
      );
      return false;
    }

    //Insert into user_meetups
    const postDataUserMeetup = {
      users_id: JSON.parse(userId).data.user_id,
      meetups_id: responseCreateMeetup.data.id,
      is_registered: false
    };

    //Cadastra usuário e valida o cadastro
    const responseCreateUserMeetups = yield call(
      api.post,
      `/${USERSMEETUP}`,
      postDataUserMeetup,
      axiosConfig
    );

    if (JSON.stringify(responseCreateUserMeetups.data.codeError) === "401") {
      yield put(
        meetupActions.meetupFailure(
          JSON.stringify(responseCreateUserMeetups.data.error)
        )
      );
      return false;
    }

    //Algum bug de navegação que não reseta a pilha e os dados
    //permanecem no tab de AddMeetup
    const routeName = "Dashboard";
    const subRouteName = "AddMeetup";
    const navigateAction = NavigationActions.navigate({
      key: null,
      routeName,
      action: StackActions.reset({ routeName: subRouteName })
    });
    navigation.dispatch(navigateAction);

    yield put(meetupActions.meetupSuccess(updateImage));
    return true;
  } catch (error) {
    yield put(meetupActions.meetupFailure(error));
    return false;
  }
}
