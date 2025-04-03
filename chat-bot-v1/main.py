from neo4j import GraphDatabase

uri = "bolt://localhost:7687"
driver = GraphDatabase.driver(uri, auth=("neo4j", "password"))  # Replace "password"

try:
    with driver.session() as session:
        result = session.run("RETURN 1")
        print(result.single())
    print("✅ Connected successfully!")
except Exception as e:
    print("❌ Failed to connect:", e)
