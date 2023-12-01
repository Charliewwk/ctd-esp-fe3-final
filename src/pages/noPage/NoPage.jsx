const NoPage = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card card-limit">
        <div className="card-header">The page you tried was not found.</div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">404 error</h5>
          <p className="card-text">You may have typed the address incorrectly or you may have used an outdated link.</p>
          <p className="card-text">If you found a broken link from another site or from our site, please email us.</p>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
