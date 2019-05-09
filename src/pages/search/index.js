import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar, AtActivityIndicator, AtList, AtListItem } from 'taro-ui'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/search'
import './index.scss'

@connect(state => state.search, { ...actions })
class Search extends Component {

  config = {
    navigationBarTitleText: '电影搜索'
  }

  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      list: [],
      loading: false
    }
  }

  onShareAppMessage () {
    return {
      title: '电影搜索',
      path: '/pages/search/index'
    }
  }

  componentDidMount() {}

  associate = () => {
    let { keyword } = this.state
    this.setState({ loading: true }, () => {
      this.state.loading && this.props.dispatchAssociateList({
        keyword
      }).then((res) => {
        this.setState({
          list: res.list,
          loading: false
        })
      })
    })
  }

  jumpToDetail = (id) => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}`
    })
  }

  onChange (value) {
    this.setState({
      keyword: value
    }, this.associate)
  }

  render () {
    const { list, loading } = this.state
    return (
      <View className='title-list'>
        <AtSearchBar
          focus
          value={this.state.keyword}
          onChange={this.onChange.bind(this)}
        />
        <AtList>
          {list.length > 0 && list.map(item => (
            <AtListItem
              key={item.doubanId}
              title={item.title}
              onClick={this.jumpToDetail.bind(this, item.doubanId)}
            />
          ))}
        </AtList>
        {loading &&
          <View className='loading-wrap'>
            <AtActivityIndicator mode='center' content='加载中...'></AtActivityIndicator>
          </View>
        }
      </View>
    )
  }
}

export default Search
