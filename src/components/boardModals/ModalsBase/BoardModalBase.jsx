import React, { useState } from 'react';
import sprite from 'images/icons.svg';
import {
  StyledModal,
  Form,
  CloseButton,
  CloseSVG,
  BigHeader,
  TitleInput,
  SmallHeader,
  List,
  Radio,
  IconSVG,
  Pic,
  SubmitButton,
} from './BoardModalBase.styled';
import { pictures_mini } from 'images/mini/index';
import { useTranslation } from 'react-i18next';

export const BoardModalBase = ({
  isModalOpen,
  info,
  onCloseModal,
  action,
  SubmitForm,
}) => {
  const { t } = useTranslation('global');
  const [title, setTitle] = useState(info.title);
  const [iconURL, setIcon] = useState(info.iconURL);
  const [backgroundURL, setBackground] = useState(info.backgroundURL);

  const Icons = [
    { value: 'icon-Project' },
    { value: 'icon-star-04' },
    { value: 'icon-loading-03' },
    { value: 'icon-puzzle-piece-02' },
    { value: 'icon-container' },
    { value: 'icon-lightning-02' },
    { value: 'icon-colors' },
    { value: 'icon-hexagon-01' },
  ];

  const Backgrounds = [
    { value: 'p0' },
    { value: 'p1' },
    { value: 'p2' },
    { value: 'p3' },
    { value: 'p4' },
    { value: 'p5' },
    { value: 'p6' },
    { value: 'p7' },
    { value: 'p8' },
    { value: 'p9' },
    { value: 'p10' },
    { value: 'p11' },
    { value: 'p12' },
    { value: 'p13' },
    { value: 'p14' },
    { value: 'p15' },
  ];

  function close() {
    onCloseModal();
    setTitle(info.title);
    setIcon(info.iconURL);
    setBackground(info.backgroundURL);
  }

  function sub(event) {
    event.preventDefault();
    SubmitForm({ title, iconURL, backgroundURL });
    setTitle(info.title);
    setIcon(info.iconURL);
    setBackground(info.backgroundURL);
  }

  function handleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <StyledModal
      isOpen={isModalOpen}
      overlayClassName={'modal-overlay'}
      className={'modal-content'}
      onRequestClose={close}
      ariaHideApp={false}
    >
      <CloseButton onClick={close}>
        <CloseSVG>
          <use xlinkHref={`${sprite}#icon-x-close`}></use>
        </CloseSVG>
      </CloseButton>

      <Form onSubmit={event => sub(event)}>
        <BigHeader>
          {action === 'add'
            ? t('screenPage.render.modal.board.titleNew')
            : t('screenPage.render.modal.board.titleEdit')}
        </BigHeader>

        <TitleInput
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          onChange={e => handleChange(e)}
          required
        />

        <SmallHeader>{t('screenPage.render.modal.board.icons')}</SmallHeader>
        <List>
          {Icons.map((Icon, index) => (
            <label key={index}>
              <Radio
                type="radio"
                name="icon"
                value={Icon.value}
                checked={Icon.value === iconURL ? true : false}
                onChange={() => setIcon(Icon.value)}
              ></Radio>
              <IconSVG aria-hidden="true">
                <use xlinkHref={`${sprite}#${Icon.value}`}></use>
              </IconSVG>
            </label>
          ))}
        </List>

        <SmallHeader>{t('screenPage.render.modal.board.backgr')}</SmallHeader>
        <List>
          {Backgrounds.map((Background, index) => (
            <label key={index}>
              <Radio
                type="radio"
                name="background"
                value={Background.value}
                checked={Background.value === backgroundURL ? true : false}
                onChange={() => setBackground(Background.value)}
              ></Radio>
              <Pic>
                <img
                  alt="icon_option"
                  src={pictures_mini[`${Background.value}`]}
                ></img>
              </Pic>
            </label>
          ))}
        </List>

        <SubmitButton type="submit">
          <span>
            <svg>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </svg>
          </span>
          {action === 'add' ? t('screenPage.render.modal.board.add-btn') : t('screenPage.render.modal.board.edit-btn')}
        </SubmitButton>
      </Form>
    </StyledModal>
  );
};
