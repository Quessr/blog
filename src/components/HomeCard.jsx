import { css } from '@emotion/react';

const HomeCard = ({ title, description, previewUrl }) => {
  return (
    <div
      className="Card"
      css={css`
        color: red;
      `}
    >
      {/* 이미지 미리 보기 */}
      <a href="#">
        <img src={previewUrl} />
      </a>

      {/* 컨텐츠 영역 */}
      <div className="text-lg">
        <a>
          <h4>{title}</h4>
          <div>
            <p className="break-words line-clamp-3">{description}</p>
          </div>
        </a>
      </div>

      {/* 바텀 영역 */}
      <div></div>
    </div>
  );
};

export default HomeCard;
