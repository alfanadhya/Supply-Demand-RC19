import React from 'react'
import Anchor from './Anchor'

const Anchors = props => (
    <React.Fragment>
        <Anchor to='data' onClick={props.onClick}>DATA</Anchor>
        <Anchor to='donasi' onClick={props.onClick}>INFO DONASI</Anchor>
        <Anchor to='bantuan' onClick={props.onClick}>PENGAJUAN BANTUAN</Anchor>
        <Anchor to='kontak' onClick={props.onClick}>KONTAK</Anchor>
    </React.Fragment>
)

export default Anchors