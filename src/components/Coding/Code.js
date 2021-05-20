// React

import React, { Component } from 'react';

// Ace

import AceEditor from "react-ace";

// Local Imports

import 'brace/mode/java'
import 'brace/mode/c_cpp'
import 'brace/mode/python'
import 'brace/ext/modelist'
import 'brace/theme/monokai'

let text =
    '{public static void main(String[] args) {\n' +
    'Scanner scan = new Scanner(System.in);\n' +
    '// scan.useDelimiter("\\Z");\n' +
    'String s = scan.next().trim();\n' +
    'if (s.length() > 0) {\n' +
    'String[] tokens = s.split("[!,?._@\\s]+");\n' +
    'System.out.println(tokens.length);\n' +
    'for(String token : tokens) {\n' +
    'System.out.println(token);}\n';

export default class Main extends Component {
    render() {
        return (
            <div>
                <AceEditor mode="java" theme="monokai" style={{ height: '27rem', width:'90%'}}
                    onChange={(value, stat) => {
                        console.log("onChange", value, stat);
                    }}
                    value={text}
                />
            </div>
        );
    }
}