import PropTypes from 'prop-types';

import FriendListItem from 'components/FriendListItem/FriendListItem';

import * as S from './FriendList.styled';

export default function FriendList ({friends}) {
    return (
        <S.FriendList>
            {friends.map(({ id, avatar, name, isOnline}) => {
                return (
                    <FriendListItem 
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}/>
                );
            })}
        </S.FriendList>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        })
    ).isRequired
};