import React from "react";

interface State {
    input: string;
    output: string;
}

export default class Base64App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            input: "",
            output: ""
        };
    }

    handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({input: e.target.value});
    };

    encodeBase64 = () => {
        try {
            const encoded = btoa(this.state.input);
            this.setState({output: encoded});
        } catch (e) {
            this.setState({output: "Error encoding text."});
        }
    };

    decodeBase64 = () => {
        try {
            const decoded = atob(this.state.input);
            this.setState({output: decoded});
        } catch (e) {
            this.setState({output: "Error decoding text."});
        }
    };

    render() {
        return (
            <div className="p-4 max-w-xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Base64 Encoder/Decoder</h1>
                <textarea
                    className="w-full h-32 p-2 border rounded mb-4"
                    placeholder="Enter text to encode/decode..."
                    value={this.state.input}
                    onChange={this.handleInputChange}
                ></textarea>
                <div className="flex space-x-2 mb-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={this.encodeBase64}
                    >
                        Encode
                    </button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={this.decodeBase64}
                    >
                        Decode
                    </button>
                </div>
                <textarea
                    className="w-full h-32 p-2 border rounded"
                    placeholder="Result will appear here..."
                    value={this.state.output}
                    readOnly
                ></textarea>
            </div>
        );
    }
}
