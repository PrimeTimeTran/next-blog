from flask import Flask, request, jsonify

app = Flask(__name__)
items = []


@app.route('/items', methods=['POST'])
def create_item():
    item = request.json
    items.append(item)
    return jsonify(item), 201


@app.route('/items', methods=['GET'])
def get_items():
    return jsonify(items), 200


@app.route('/items/<int:item_id>', methods=['GET'])
def get_item(item_id):
    if 0 <= item_id < len(items):
        return jsonify(items[item_id]), 200
    return jsonify({"error": "Item not found"}), 404


@app.route('/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    if 0 <= item_id < len(items):
        item = request.json
        items[item_id] = item
        return jsonify(item), 200
    return jsonify({"error": "Item not found"}), 404


@app.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    if 0 <= item_id < len(items):
        deleted_item = items.pop(item_id)
        return jsonify(deleted_item), 200
    return jsonify({"error": "Item not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)
