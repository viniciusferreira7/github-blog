import axios from 'axios'

export const apiUser = axios.create({
  baseURL: 'https://api.github.com/users/viniciusferreira7',
})

export const apiSearch = axios.create({
  baseURL: 'https://api.github.com/search/issues',
})

export const apiIssue = axios.create({
  baseURL: 'https://api.github.com/repos/viniciusferreira7/github-blog/issues',
})
