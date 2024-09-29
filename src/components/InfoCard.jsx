function InfoCard({ projectName, projectDesc }) {
  return (
    <>
      <div className="border border-white w-full h-fit max-h-full rounded-xl hover:scale-105 hover:delay-100 hover:transition-transform hover:border-pink-500">
        <div className="m-8 text-2xl">{projectName}</div>
        <p className="m-8 text-sm"> {projectDesc}</p>
      </div>
    </>
  );
}

export default InfoCard;
