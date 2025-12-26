'use client';

import { useState } from 'react';
import { SelectDropdown } from '@/components/SelectDropdown';
import { Button } from '@/components/ui/button';
import TitleInput from './TitleInput';

export default function InputPost() {
  const [select, setSelect] = useState('공지사항');

  return (
    <div>
      <form action="" className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <SelectDropdown
            select={select}
            setSelectAction={setSelect}
            values={['공지사항', '일기장', '개발']}
          />
          <TitleInput type="text" placeholder="title" classname="w-full" />
        </div>
        <textarea
          placeholder="content..."
          className="h-30 w-full items-center rounded-md border border-gray-400 p-2"
        />
        <div className="flex justify-evenly">
          <Button variant={'ghost'}>취소</Button>
          <Button variant={'destructive'}>삭제</Button>
          <Button variant={'apply'}>저장</Button>
        </div>
      </form>
    </div>
  );
}
