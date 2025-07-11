# filepath: app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

# Route to handle form submission
@app.route('/submit-form', methods=['POST'])
def submit_form():
    # Get form data
    form_data = request.form.to_dict()
    
    # Example: Store data in a dictionary (or save to a database)
    stored_data = {
        "name": form_data.get("name"),
        "email": form_data.get("email"),
        "message": form_data.get("message")
    }

    # Return a success response
    return jsonify({"message": "Form data received!", "data": stored_data}), 200

if __name__ == '__main__':
    app.run(debug=True)