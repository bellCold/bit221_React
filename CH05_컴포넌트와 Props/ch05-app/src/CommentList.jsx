import React from 'react'
import Comment from './Comment';

const list = [{
  name: 'Ken',
  comment: '안녕하세요?',
  avatarUrl: 'images/simple/2627.jpg'
},
{
  name: 'Ken',
  comment: '안녕하세요?',
  avatarUrl: 'images/simple/2627.jpg'
},
{
  name: 'Ken',
  comment: '안녕하세요?',
  avatarUrl: 'images/simple/2627.jpg'
},
{
  name: 'Ken',
  comment: '안녕하세요?',
  avatarUrl: 'images/simple/2627.jpg'
}];

function CommentList() {
  return (
    <>
      {
        list.map((data, idx) => {
          return (
            <Comment name={data.name} comment={data.comment} avatarUrl={data.avatarUrl} />
          )
        })
      }
    </>
  )
}

export default CommentList