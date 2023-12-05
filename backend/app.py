from flask import Flask, jsonify
import psycopg2

app = Flask(__name__)

def query_db(query):
    conn = psycopg2.connect(
        user="postgres",
        host="madhouse-database-1",
        port=5432,
        dbname="housingdemo"
    )
    cur = conn.cursor()
    cur.execute(query)

    # Fetching column names
    column_names = [desc[0] for desc in cur.description]

    # Fetching all rows
    rows = cur.fetchall()

    # Combining column names with rows
    data = [dict(zip(column_names, row)) for row in rows]

    cur.close()
    conn.close()
    return data

@app.route('/api/housingdemo/cpi-inflation', methods=['GET'])
def cpi_inflation():
    data = query_db("SELECT * FROM cpi_inflation_by_region;")
    return jsonify(data)

@app.route('/api/housingdemo/hpi-regions', methods=['GET'])
def hpi_regions():
    data = query_db("SELECT * FROM hpi_by_regions;")
    return jsonify(data)

@app.route('/api/housingdemo/hpi-federal-provincial', methods=['GET'])
def hpi_federal_provincial():
    data = query_db("SELECT * FROM hpi_federal_provincial;")
    return jsonify(data)

@app.route('/api/housingdemo/hpi-federal-provincial/columns', methods=['GET'])
def hpi_federal_provincial_columns():
    try:
        conn = psycopg2.connect(
            user="postgres",
            host="madhouse-database-1",
            port=5432,
            dbname="housingdemo"
        )
        cur = conn.cursor()

        # Query to get column names
        cur.execute("SELECT * FROM hpi_federal_provincial LIMIT 0;")
        column_names = [desc[0] for desc in cur.description]

        cur.close()
        conn.close()

        return jsonify(column_names)
    except Exception as e:
        return jsonify({"error": str(e)})


@app.route('/api/housingdemo/income-distribution', methods=['GET'])
def income_distribution():
    data = query_db("SELECT * FROM income_distribution;")
    return jsonify(data)

@app.route('/api/housingdemo/interest-mortgage-rates', methods=['GET'])
def interest_mortgage_rates():
    data = query_db("SELECT * FROM interest_mortgage_rates;")
    return jsonify(data)

@app.route('/api/housingdemo/population-regions', methods=['GET'])
def population_regions():
    data = query_db("SELECT * FROM population_by_region;")
    return jsonify(data)

@app.route('/api/housingdemo/population-dwellings', methods=['GET'])
def population_dwellings():
    data = query_db("SELECT * FROM population_dwellings_count;")
    return jsonify(data)

@app.route('/api/housingdemo/structural-dwellings', methods=['GET'])
def structural_dwellings():
    data = query_db("SELECT * FROM structural_dwellings_household_size;")
    return jsonify(data)
@app.route('/api/regions', methods=['GET'])
def regions():
    data = query_db("SELECT DISTINCT geo FROM population_by_region WHERE vector != 'v5';")
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4200, debug=True)
