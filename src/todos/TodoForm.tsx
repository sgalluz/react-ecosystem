import React from 'react';
import './TodoForm.scss';

type TodoState = {
    text: string
}

class TodoForm extends React.Component<any, TodoState> {
    constructor(props: any) {
        super(props);
        this.state = { text: '' };
    }

    render(): React.ReactNode {
        const { text } = this.state;
        return (
            <div className='todo-form'>
                <input
                    className='todo-text'
                    type='text'
                    placeholder='Type your new todo here'
                    value={text}
                    onChange={this.updateValue} />
                <button className='button primary'>Create Todo</button>
            </div>
        );
    }

    private updateValue = (e: React.FormEvent<HTMLInputElement>) => {
        const text: string = e?.currentTarget?.value;
        this.setState({ text });
    }
}

export default TodoForm;