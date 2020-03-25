import React, { useState } from 'react';
import { Input } from 'antd';
import styles from './TextEdit.less';

export const TextEdit = (props: any) => {
  const [textValue, setTextValue] = useState('');
  const [editMode, setEditMode] = useState(false);


  return (
    <div className={styles.textEditStyle}>
      {editMode === false ? (
        <div className={styles.textHover}>
          <span>{props.data}</span>
          <a onClick={() => setEditMode(true)}>修改</a>
        </div>
      ) : (
        <div className={styles.textEdit}>
          <Input value={textValue} onChange={e => setTextValue(e.target.value)} />
          <a className={styles.textEditClick} onClick={() => setEditMode(false)}>取消</a>
          <a className={styles.textEditClick}
            onClick={() => {
              props.save(textValue);
              setEditMode(false);
            }}
          >
            确认
          </a>
        </div>
      )}
    </div>
  );
};
