import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';

import './Main.scss'

export default function Main() {
  return <>
    <div className='main'>
		<Button action={() => console.log('clicked')} mod='big'>Example Button</Button>
	</div>
  </>
}