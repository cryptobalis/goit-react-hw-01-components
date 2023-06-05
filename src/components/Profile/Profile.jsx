import PropTypes from 'prop-types';

import * as S from './Profile.styled';

export default function Profile ({
    username,
    tag,
    location,
    avatar,
    stats: {followers, views, likes},
})  {
    return (
        <S.Container>
            <S.Description>
    <S.Avatar src={avatar} alt="User avatar"/>
    <S.Name>{username}</S.Name>
    <S.Tag>@{tag}</S.Tag>
    <S.Location>{location}</S.Location>
            </S.Description>
            <S.List>
                <S.ListItems>
<S.Label>Followers</S.Label>
<S.Quantity>{followers}</S.Quantity>
                </S.ListItems>
                <S.ListItems>
                <S.Label>Views</S.Label>
<S.Quantity>{views}</S.Quantity>
                    </S.ListItems>
                    <S.ListItems>
                    <S.Label>Likes</S.Label>
<S.Quantity>{likes}</S.Quantity>
                    </S.ListItems> 
                    
            </S.List>
        </S.Container>
    );
};

Profile.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }).isRequired,
    }),
  };
