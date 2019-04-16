import React, { Component } from 'react'
import { View, Text } from 'react-native'

import {
  Container,
  PodcastDetails,
  BackButton,
  EpisodeList,
  Background,
  Cover,
  PodcastTitle,
  PlayButton,
  PlayButtonText,
  Episode,
  Title,
  Author
} from './style'

import Icons from 'react-native-vector-icons/MaterialIcons'

export default class Podcast extends Component {
  backHome = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render() {
    const { navigation } = this.props
    const podcast = navigation.getParam('podcast')

    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <Background source={{ uri: podcast.cover }} blurRadius={5} />

              <BackButton
                onPress={() => {
                  this.backHome()
                }}
              >
                <Icons name="arrow-back" size={24} color="#FFF" />
              </BackButton>

              <Cover source={{ uri: podcast.cover }} />

              <PodcastTitle>{podcast.title}</PodcastTitle>

              <PlayButton onPress={() => {}}>
                <PlayButtonText>REPRODUZIR</PlayButtonText>
              </PlayButton>
            </PodcastDetails>
          )}
          data={podcast.tracks}
          keyExtractor={episode => String(episode.id)}
          renderItem={({ item: episode }) => (
            <Episode>
              <Title>{episode.title}</Title>
              <Author>{episode.artist}</Author>
            </Episode>
          )}
        />
      </Container>
    )
  }
}
