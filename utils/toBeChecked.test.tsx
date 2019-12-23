import React from 'react'
import {mount, shallow} from 'enzyme'

function Fixture() {
  const onChange = () => {
    console.log(onChange)
  }

  return (
    <div>
      <input id="checked" onChange={onChange} defaultChecked />
      <input id="not" onChange={onChange} defaultChecked={false} />
      <input id="tertiary" onChange={onChange} checked={false} />
    </div>
  );
}

const wrapper = mount(<Fixture />); // mount/render/shallow when applicable

test('toBeChecked', () => {
  expect(wrapper.find('#checked')).toBeChecked();
  expect(wrapper.find('#not')).not.toBeChecked();
})

