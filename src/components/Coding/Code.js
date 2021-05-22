import React, { Component } from 'react';
import AceEditor from "react-ace";
import 'brace/mode/java'
import 'brace/mode/c_cpp'
import 'brace/mode/python'
import 'brace/ext/modelist'
import 'brace/theme/monokai'

let text = '';

export default class Main extends Component {
    render() {
        return (
            <div>
                <AceEditor mode="java" theme="monokai" style={{ height: '27rem', width:'90%'}}
                    onChange={(value, stat) => {
                        console.log("onChange", value, stat);
                    }}
                    value={text}
                    fontSize={16}
                    showPrintMargin={false}
                    showGutter={true}
                    tabSize={2}
                />
            </div>
        );
    }
}