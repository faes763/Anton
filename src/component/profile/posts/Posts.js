import React from "react";
import Post from '../posts/post/Post';
function Posts() {
    return (
        <div className='posts'>
          <input placeholder='Введите сообщение' />
          <button>Добавить пост</button>
          <p>Записи</p>
          <Post name="Артём" message="-Жили у бабуси"></Post>
          <Post name="Олег" message="-Два весёлых гуся"></Post>
          <Post name="Маша"message="-Один серый другой белый"></Post>
          <Post name="Паша" message="-Два весёлых гуся"></Post>
        </div>
    );
}
export default Posts;