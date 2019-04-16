import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import podCastActions from '~/store/ducks/podcasts'

import {
  Container,
  PodcastList,
  PodCast,
  Cover,
  Info,
  Title,
  Count,
  PageTitle
} from './style'

class Main extends Component {
  componentDidMount() {
    const { loadRequest } = this.props
    loadRequest()
  }

  callPodCastActivity = podcast => {
    const { navigation } = this.props

    navigation.navigate('Podcast', { podcast })
  }

  render() {
    const { podcasts } = this.props
    return (
      <Container>
        <PodcastList
          ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
          data={podcasts.data}
          keyExtractor={podcast => String(podcast.id)}
          renderItem={({ item: podcast }) => (
            <PodCast
              onPress={() => {
                this.callPodCastActivity(podcast)
              }}
            >
              <Cover source={{ uri: podcast.cover }} />
              <Info>
                <Title>{podcast.title}</Title>
                <Count>{`${podcast.tracks.length} episódios`}</Count>
              </Info>
            </PodCast>
          )}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  podcasts: state.podcasts
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(podCastActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
