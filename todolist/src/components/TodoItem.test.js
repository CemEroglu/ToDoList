import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';

test("Is title correct?", ()=>{
    const{debug, container} = render(<TodoItem id={1} title={"Todo1"} completed={false} />)
    expect(container.firstChild).toHaveTextContent('Todo1')
    //screen.debug
})
