import React, { useState } from 'react';
import { Button, Input } from 'shadcn/ui';

function SwapInterface() {
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amount, setAmount] = useState('');

  const handleChangeFromToken = (e) => {
    setFromToken(e.target.value);
  };

  const handleChangeToToken = (e) => {
    setToToken(e.target.value);
  };

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSwap = () => {
    // 执行Swap操作的逻辑
    // ...
    

    // 清空输入框
    setFromToken('');
    setToToken('');
    setAmount('');
  };

  return (
    <div>
      <Input label="From Token" value={fromToken} onChange={handleChangeFromToken} />
      <Input label="To Token" value={toToken} onChange={handleChangeToToken} />
      <Input label="Amount" value={amount} onChange={handleChangeAmount} />
      <Button onClick={handleSwap}>Swap</Button>
    </div>
  );
}

export default SwapInterface;