import PropTypes from 'prop-types';

import * as S from './FriendListItem.styled';

export default function FriendListItem({id, avatar, name, isOnline}) {

    return (
        <S.FriendListItem>
        {isOnline ? (<S.StatusOn></S.StatusOn>) : (<S.StatusOff></S.StatusOff>)}
        <S.Avatar src={avatar} alt={name} width="40" height="40"></S.Avatar>
        <S.Name>{name}</S.Name>
        </S.FriendListItem>
    );
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

