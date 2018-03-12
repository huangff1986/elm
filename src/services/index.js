import request from '../utils/request';

export function getHot() {
  return request('/api/hot');
}

export function getBannerData() {
  return request('/api/banner')
}