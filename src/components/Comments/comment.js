import React from 'react';
import data from '../../../data.json';

import amyrobson from '../../../images/avatars/image-amyrobson.png';
import juliusomo from '../../../images/avatars/image-juliusomo.png';
import maxblagun from '../../../images/avatars/image-maxblagun.png';
import ramsesmiron from '../../../images/avatars/image-ramsesmiron.png';

const { comments, currentUser } = data;
const { username } = currentUser;
// const { user } = comments.user;

import './style.scss';

export default function Comment() {
  // console.log(comments, 'comments');
  // console.log(username, 'username');
  return (
    <div className='comment'>

      {
        comments.map((comment, i) => (
          console.log(comment, 'comment'),
          <div className='comment__container'>
            <div className='comment__container__comment'>
              <div className='comment__container__comment__user'>
                <h4>
                  {comment.user.username}
                </h4>
                <img src={amyrobson} alt="avatar" />
                <img src={comment.user.image.webp} alt="avatar" />
              </div>

              <div className='comment__container__comment__score'>
                {comment.score}
              </div>

              <div className='comment__container__comment__replies'>
                {comment.replies.length}
              </div>

              <div className='comment__container__comment__content'>
                <p key={i}>{comment.content}</p>
              </div>

              <div className='comment__container__comment__date'>
                <span>
                  {comment.createdAt}
                </span>
              </div>
            </div>
          </div>
        )
        )
      }
    </div>
  );
}
