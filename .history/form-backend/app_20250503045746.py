from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configure the SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///formdata.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db = SQLAlchemy(app)

# Define a model for the form data
class FormData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=False)

# Create the database tables
with app.app_context():
    db.create_all()

# Route to handle form submission
@app.route('/submit-form', methods=['POST'])
def submit_form():
    # Get form data
    form_data = request.form.to_dict()

    # Save data to the database
    new_entry = FormData(
        name=form_data.get("name"),
        email=form_data.get("email"),
        message=form_data.get("message")
    )
    db.session.add(new_entry)
    db.session.commit()

    # Return a success response
    return jsonify({"message": "Form data saved to the database!"}), 200

if __name__ == '__main__':
    app.run(debug=True)p