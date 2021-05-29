import React, { Component } from 'react';
import AceEditor from "react-ace";
import 'brace/mode/java'
import 'brace/mode/c_cpp'
import 'brace/mode/python'
import 'brace/ext/modelist'
import 'brace/theme/monokai'

let text = '';

export default function Code({code, setCode}) {
    
    
    
    return (
            <div>
                <AceEditor mode="java" theme="monokai" style={{ height: '27rem', width:'90%'}}
                    onChange={(code, setCode) => {
                        console.log("onChange", code, setCode);
                    }}
                    value={code}
                    fontSize={16}
                    showPrintMargin={false}
                    showGutter={true}
                    tabSize={4}
                />
            </div>
        );
    }