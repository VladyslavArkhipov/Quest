import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useState } from 'react';

const QuestsCatalog = (props) => {
  const questsCatalogData = props.questsCatalogData
  const [questType, setQuestType] = useState('');
  function setCurrentType(type) {
    switch (true) {
      case type === 'adventures':
        setQuestType('adventures')
        break
      case type === 'horror':
        setQuestType('horror')
        break
      case type === 'mystic':
        setQuestType('mystic')
        break
      case type === 'detective':
        setQuestType('detective')
        break
      case type === 'sci-fi':
        setQuestType('sci-fi')
        break
      default:
        setQuestType('')
    }
  }
  const filteredQuests = questType === ''?
    questsCatalogData : questsCatalogData.filter((quest) => quest.type === questType);
  return (
    <>
      <S.Tabs>
        <S.TabItem onClick = {() =>setCurrentType('')}>
          <S.TabBtn isActive>
            <IconAllQuests />
            <S.TabTitle>Все квесты</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick = {() =>setCurrentType('adventures')}>
          <S.TabBtn>
            <IconAdventures />
            <S.TabTitle>Приключения</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick = {() =>setCurrentType('horror')}>
          <S.TabBtn>
            <IconHorrors />
            <S.TabTitle>Ужасы</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick = {() =>setCurrentType('mystic')}>
          <S.TabBtn>
            <IconMystic />
            <S.TabTitle>Мистика</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick = {() =>setCurrentType('detective')}>
          <S.TabBtn>
            <IconDetective />
            <S.TabTitle>Детектив</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick = {() =>setCurrentType('sci-fi')}>
          <S.TabBtn>
            <IconScifi />
            <S.TabTitle>Sci-fi</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      </S.Tabs>

      <S.QuestsList>
        {filteredQuests.map((quest) => (
          <S.QuestItem key={quest.id}>
            <S.QuestItemLink to={`/quest_${quest.id}`}>
              <S.Quest>
                <S.QuestImage
                  src={quest.previewImg}
                  width='344'
                  height='232'
                  alt={`квест ${quest.title}`}/*`квест ${quest.title}`*/
                />

                <S.QuestContent>
                  <S.QuestTitle>{quest.title}</S.QuestTitle>

                  <S.QuestFeatures>
                    <S.QuestFeatureItem>
                      <IconPerson />
                      {`${quest.peopleCount[0]}–${quest.peopleCount[1]} чел`}
                    </S.QuestFeatureItem>
                    <S.QuestFeatureItem>
                      <IconPuzzle />
                      {quest.level}
                    </S.QuestFeatureItem>
                  </S.QuestFeatures>
                </S.QuestContent>
              </S.Quest>
            </S.QuestItemLink>
          </S.QuestItem>
        ))}
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
