// import React, { Component } from 'react'
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export function Chart({ stats , headline}) {

    return (
        <div>
            <p>Bitcoin {headline} Chart</p>
            <Sparklines data={stats ? stats : []} width={100} height={20} margin={5}>
                <SparklinesLine />
            </Sparklines>
        </div>
    )
}

// {"status":"ok","name":"Market Price (USD)","unit":"USD","period":"day","description":"Average USD market price across major bitcoin exchanges.",
// "values":[{"x":1659052800,"y":23856.25}
