import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker'
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 5:00"
          critic="bunch of lies"
          avatar={faker.image.image()}
        />
        </ApprovalCard>
      <CommentDetail author="John" timeAgo="Today at 4:50" critic="nice post" />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 3:27"
        critic="totally agree"
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
