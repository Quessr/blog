import HomeCard from './HomeCard';

const HomeList = () => {
  return (
    <main className=" h-screen bg-purple-300 mt-6 grid grid-cols-4">
      {new Array(100).fill(0).map((_, index) => {
        return (
          <HomeCard
            key={index}
            title="(번역)타입스크립트 프로젝트를 위한 궁극적인 클린 아키텍처 템플릿"
            description="원문 : https://betterprogramming.pub/the-ultimate-clean-architecture-template-for-typescript-projects-e53936269bb9클린 아키텍처 원칙에 따른 레이어 기반의 타입스크립트 프로젝"
            previewUrl="https://velog.velcdn.com/images/lky5697/post/870c18c7-c70a-4455-9fea-5f693529cdc3/image.jpeg"
          />
        );
      })}
    </main>
  );
};

export default HomeList;
