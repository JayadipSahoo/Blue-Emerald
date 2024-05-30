"use client";

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp 
        prefix="₹"
        decimals={3}
        end={amount} 
      />
    </div>
  )
}

export default AnimatedCounter