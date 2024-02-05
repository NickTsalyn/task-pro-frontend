import React, { useState } from 'react'
import sprite from 'images/icons.svg'
import { StyledModal, Form, CloseButton, CloseSVG, BigHeader, TitleInput, SmallHeader, List, Radio, IconSVG, FuturePic, SubmitButton } from './BoardModalBase.styled'

export const BoardModalBase = ({ isModalOpen, info, onCloseModal, action, SubmitForm }) => {
    const [title, setTitle] = useState(info.title)
    const [icon, setIcon] = useState(info.icon)
    const [background, setBackground] = useState(info.background)

    const Icons = [{value: 'icon-Project'}, {value: 'icon-star-04'}, {value: 'icon-loading-03'}, {value: 'icon-puzzle-piece-02'},
                   {value: 'icon-container'}, {value: 'icon-lightning-02'}, {value: 'icon-colors'}, {value: 'icon-hexagon-01'}]
    
    const Backgrounds = [{value: '0'}, {value: '1'}, {value: '2'}, {value: '3'},
                        {value: '4'}, {value: '5'}, {value: '6'}, {value: '7'},
                        {value: '8'}, {value: '9'}, {value: '10'}, {value: '11'},
                        {value: '12'}, {value: '13'}, {value: '14'}, {value: '15'}]

    function close() {
        onCloseModal()
        setTitle('')
    }

    function sub(event) {
        event.preventDefault()
        SubmitForm({title, icon, background})
    }

    function handleChange(e) {
        setTitle(e.target.value)
    }

    return (
        <StyledModal
            isOpen={isModalOpen}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '40px 10px 40px 10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    overflow: 'hidden',
                    overflowY: 'auto',
                    transition: 'opacity 0.3s',
                }
              }}
            onRequestClose={onCloseModal}
            ariaHideApp={false}
        >
            <CloseButton onClick={close}>
                <CloseSVG><use xlinkHref={`${sprite}#icon-x-close`}></use></CloseSVG>
            </CloseButton>

            <Form onSubmit={event => sub(event)}>
                <BigHeader>{action==='add' ? 'New' : 'Edit'} board</BigHeader>

                <TitleInput
                    id="title"
                    name='title'
                    placeholder='Title'
                    value={title}
                    onChange={e => handleChange(e)}
                    required
                />

                <SmallHeader>Icons</SmallHeader>
                <List>
                    {Icons.map((Icon, index) => (
                        <label key={index}>
                            <Radio 
                                type="radio" 
                                name='icon'
                                value={Icon.value}
                                checked={Icon.value === icon ? true : false}
                                onChange={() => setIcon(Icon.value)}>
                            </Radio>
                            <IconSVG aria-hidden="true"><use xlinkHref={`${sprite}#${Icon.value}`}></use></IconSVG>
                        </label>
                    ))}
                </List>

                <SmallHeader>Background</SmallHeader>
                <List>
                    {Backgrounds.map((Background, index) => (
                        <label key={index}>
                            <Radio
                                type="radio" 
                                name='background'
                                value={Background.value}
                                checked={Background.value === background ? true : false}
                                onChange={() => setBackground(Background.value)}>
                            <FuturePic></FuturePic>
                            </Radio>
                        </label>
                    ))}
                </List>

                <SubmitButton type="submit">
                    <span>
                        <svg><use xlinkHref={`${sprite}#icon-plus`}></use></svg>
                    </span>
                    {action==='add' ? 'Create' : 'Edit'}
                </SubmitButton>
            </Form>
        </StyledModal>
    )
  }