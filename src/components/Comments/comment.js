import React from 'react';
import data from '../../../data.json';

import amyrobson from '../../../images/avatars/image-amyrobson.png';
import juliusomo from '../../../images/avatars/image-juliusomo.png';
import maxblagun from '../../../images/avatars/image-maxblagun.png';
import ramsesmiron from '../../../images/avatars/image-ramsesmiron.png';

import reply from '../../../images/icon-reply.svg';

const { comments, currentUser } = data;
const { username } = currentUser;

console.log(comments, 'data');
import './style.scss';

export default function Comment() {
  // console.log(comments, 'comments');
  // console.log(username, 'username');

  function upValueScore() {
    console.log('je Up');
  
  }
  function downValueScore() {
    console.log('je down');
  }
    return (
    <div className='comment'>

      {
        comments.map((comment, i) => (
          console.log(comment.user, 'comment'),
          console.log(comment.user.image.png),
          <div className='comment__container'>
            <div className='comment__container__comment'>

              <div className='comment__container__comment__user'>
                {/* <img src={comment.user.image.png} alt="avatar" /> */}
                <img src={amyrobson? amyrobson : maxblagun} alt="avatar" />
                <h4>
                  {comment.user.username}
                </h4>
                <div className='comment__container__comment__user__date'>
                  <span>
                    {comment.createdAt}
                  </span>
                </div>
              </div>

              <div className='comment__container__comment__score'>
                <button onClick={upValueScore}>+</button>
                <span>
                  {comment.score}
                </span>
                
                <button onClick={downValueScore}>-</button>
              </div>

              <div className='comment__container__comment__replies'>
                <button>
                  <img src={reply} alt="" /><p>Reply</p>
                </button>
              </div>

              <div className='comment__container__comment__content'>
                <p key={i}>{comment.content}</p>
              </div>

              
            </div>
          </div>
        )
        )
      }
    </div>
  );
}
