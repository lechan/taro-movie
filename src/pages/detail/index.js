import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/list'
import './index.scss'

@connect(state => state.list, { ...actions })
class Detail extends Component {

  config = {
    navigationBarTitleText: '电影详情'
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      doubanId: '',
      detail: {}
    }
  }

  onShareAppMessage () {
    const {
      title
    } = this.state.detail
    const id = this.$router.params.id
    return {
      title: title,
      path: `/pages/detail/index?id=${id}`
    }
  }

  componentWillMount () {
    const doubanId = this.$router.params.id
    this.setState({
      doubanId,
      loading: true
    })
  }

  componentDidMount() {
    this.getMovieItem()
  }

  getMovieItem = () => {
    const { doubanId } = this.state
    const { movieList, dispatchMovie } = this.props
    const list = movieList.filter(item => {
      return item.doubanId === doubanId
    })
    let detail = {}
    if (list.length > 0) {
      detail = list[0]
      this.setState({
        detail,
        loading: false
      })
    } else {
      dispatchMovie({
        doubanId
      }).then(res => {
        this.setState({
          detail: res,
          loading: false
        })
      })
    }

  }

  render () {
    const { loading } = this.state
    const {
      poster,
      title,
      year,
      rawTitle,
      summary,
      rate,
      pubdate = [],
      movieTypes = [],
      tags = []
    } = this.state.detail
    return this.state.doubanId !== '' && (
      <View>
        {loading ?
          <View className='loading-wrap'>
            <AtActivityIndicator mode='center' content='加载中...'></AtActivityIndicator>
          </View>
          :
          <View className='movie-detail-wrap'>
            <View className='movie-title at-article__h3'>
              <Text>{title}（{year}）</Text>
            </View>
            <View className='movie-poster-wrap'>
              <Image
                className='movie-poster'
                src={poster}
                mode='widthFix'
              ></Image>
            </View>
            <View className='movie-info-wrap'>
              <View className='info-item'>
                <Text className='info-label'>原名：</Text>
                <Text className='info-value'>{rawTitle}</Text>
              </View>
              <View className='info-item'>
                <Text className='info-label'>简介：</Text>
                <Text className='info-value'>{summary}</Text>
              </View>
              <View className='info-item'>
                <Text className='info-label'>评分：</Text>
                <Text className='info-value'>{rate}</Text>
              </View>
              <View className='info-item'>
                <Text className='info-label'>上映时间：</Text>
                <Text className='info-value'>{pubdate.length > 0 && pubdate[0].date.split('T')[0]}</Text>
              </View>
              <View className='info-item'>
                <Text className='info-label'>上映地区：</Text>
                <Text className='info-value'>{pubdate.length > 0 && pubdate[0].country}</Text>
              </View>
              <View className='info-item'>
                <Text className='info-label'>影片类型：</Text>
                <Text className='info-value'>{movieTypes.join('，')}</Text>
              </View>
              <View className='info-item'>
                <Text className='info-label'>热门标签：</Text>
                <Text className='info-value'>{tags.join('，')}</Text>
              </View>
            </View>
          </View>
        }
      </View>
    )
  }
}

export default Detail
