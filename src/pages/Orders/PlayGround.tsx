import React from 'react'
import { FiAtSign, FiBookmark, FiTrash, FiUser } from 'react-icons/fi'
import styled from 'styled-components'
import Alert from '../../components/Alert/Alert'
import Button from '../../components/Button/Button'
import Checkbox from '../../components/Checkbox/Checkbox'
import Checkbox2 from '../../components/Checkbox/Checkbox2'
import Dropdown from '../../components/Dropdown/Dropdown'
import Input from '../../components/Input/Input'
import Radio from '../../components/Radio/Radio'
import Select from '../../components/Select/Select'

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const ButtonRow = styled(Row)`
  button {
    margin-right: 10px;
  }
`
const StyledAlert = styled(Alert)`
  margin-bottom: 25px;
`

const PlayGround = () => {
  return (
    <div>
      <h3>Components</h3>
      <section>
        <h4>Button</h4>
        <ButtonRow>
          <Button disabled leftIcon={<FiBookmark />} rightIcon={<FiBookmark />} color="blue" size="small" view="fill" text="Bookmark" />
          <Button leftIcon={<FiBookmark />} rightIcon={<FiBookmark />} color="pink" size="medium" view="fill" text="Submit" />
          <Button leftIcon={<FiBookmark />} rightIcon={<FiBookmark />} color="orange" size="large" view="fill" text="Submit" />
          <Button leftIcon={<FiBookmark />} color="red" size="large" view="fill" text="Submit" />
          <Button rightIcon={<FiTrash />} color="red" size="large" view="fill" />
          <Button rightIcon={<FiTrash />} color="red" size="medium" view="fill" />
        </ButtonRow>
        <ButtonRow style={{ marginTop: 10 }}>
          <Button disabled color="blue" size="small" view="outline" text="Submit" />
          <Button color="pink" size="medium" view="outline" text="Submit" />
          <Button color="orange" size="large" view="outline" text="Submit" />
          <Button color="red" size="large" view="outline" text="Submit" />
          <Button rightIcon={<FiTrash />} color="red" size="medium" view="outline" />
        </ButtonRow>
      </section>

      <section>
        <h4>Select/Dropdown</h4>
        <Select leftIcon={<FiUser />} label="Placeholder" />
        <Select label="Placeholder" />
      </section>

      <section>
        <h4>Input</h4>
        <Input leftIcon={<FiTrash />} label="First name" placeholder="firstname" />
        <Input label="Last name" placeholder="firstname" />
        <Input rightIcon={<FiAtSign />} label="Email" placeholder="firstname" />
      </section>

      <section>
        <h4>Checkbox</h4>
        <Checkbox label="Label" caption="Caption" />
        <Radio />
      </section>

      <section>
        <h4>Alert</h4>
        <StyledAlert color="red" type="fill" />
        <StyledAlert color="blue" type="fill" />
        <StyledAlert color="blue" />
      </section>
    </div>
  )
}

export default PlayGround
