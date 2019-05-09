import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/list'
import { getWindowHeight } from '@utils/style'
import './index.scss'

@connect(state => state.list, { ...actions })
class List extends Component {
  config = {
    navigationBarTitleText: '电影列表'
  }

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      loading: true
    }
    this.pageNo = 1
    this.pageSize = 10
  }

  onShareAppMessage () {
    return {
      title: '切仔的电影列表',
      path: '/pages/list/index'
    }
  }

  componentDidMount() {
    this.getMovieData()
  }

  getMovieData = () => {
    const { pageNo, pageSize } = this
    let { list } = this.state
    this.setState({ loading: true }, () => {
      this.state.loading && this.props.dispatchMovieList({
        pageNo,
        pageSize
      }).then((res) => {
        this.setState({
          list: [...list, ...res.list],
          loading: false
        })
        Taro.setStorageSync('movieList', [...list, ...res.list])
      })
    })
  }

  loadMore = () => {
    const { loading } = this.state
    if (!loading) {
      this.pageNo++
      this.getMovieData()
    }
  }

  jumpToDetail = (id) => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}`
    })
  }

  jumpToSearch = () => {
    Taro.navigateTo({
      url: `/pages/search/index`
    })
  }

  render () {
    const { list, loading } = this.state
    const height = parseInt(getWindowHeight()) - 35 + 'px'
    return (
      <View className='list-page'>
        <View className='search-wrap' onClick={this.jumpToSearch}>
          <Text className='search-button'>搜索</Text>
        </View>
        <ScrollView
          scrollY
          className='movie-list'
          style={{ height }}
          lowerThreshold={80}
          onScrollToLower={this.loadMore}
        >
          <View className='movie-list-wrap'>
            {list.length > 0 && list.map(item => (
              <View
                className='movie-item'
                key={item.doubanId}
                onClick={this.jumpToDetail.bind(this, item.doubanId)}
              >
                <Image
                  className='movie-poster'
                  src={item.poster}
                  mode='scaleToFill'
                ></Image>
                <Text className='movie-title'>{item.title}</Text>
              </View>
            ))}
          </View>
          {loading &&
            <View className='loading-wrap'>
              <AtActivityIndicator mode='center' content='加载中...'></AtActivityIndicator>
            </View>
          }
        </ScrollView>
      </View>
    )
  }
}

export default List
