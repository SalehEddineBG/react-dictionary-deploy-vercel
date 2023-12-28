import List from "./List";

function ResponsePanel({ data, isLoading, error }) {
    return (
        <>
            <div className="row mt-3">
                <div className="col-2"></div>
                <div className="col-8 text-center">
                    {isLoading ? (<p className="fs-3" data-testid="loading">Is Loading...</p>) : (<></>)}
                    {error ? (<p className="fs-3 text-danger" data-testid="error">No data were found !</p>) : (<></>)}
                </div>
                <div className="col-2"></div>
            </div>
            {data ? (<>
                <div className="row" data-testid="response">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="card">
                            <h5 className="card-header">Meanings</h5>
                            <div className="card-body">
                                <List data={data} />
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </>) : (<></>)}
        </>
    );
}
export default ResponsePanel;