from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os

app = Flask(__name__)
CORS(app)


openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/", methods=["GET"])
def home():
    return "✅ Backend is running. Use POST /ask to talk to the bot."

@app.route("/ask", methods=["POST"])
def ask():
    try:
        data = request.get_json()
        user_msg = data.get("message")

        if not user_msg:
            return jsonify({"error": "No message provided"}), 400

        print(f"🟢 Received message: {user_msg}")

        client = openai.OpenAI()

        response = client.chat.completions.create(
            model="gpt-3.5-turbo", 
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_msg}
            ]
        )


        reply = response.choices[0].message.content
        return jsonify({"reply": reply})

    except Exception as e:
        print("❌ ERROR:", str(e))
        return jsonify({"error": "Internal server error", "details": str(e)}), 500
        
@app.route('/ping')
def ping():
    return "OK", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
