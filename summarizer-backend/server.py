from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
import torch

app = Flask(__name__)

CORS(app, resources={r"/summarize": {"origins": "http://localhost:3000"}})

print("⚙️ Loading model and tokenizer...")
model_path = "s0urin/aml-text-summarization-t5"
tokenizer = AutoTokenizer.from_pretrained(model_path)
print("✅ Loaded tokenizer from", model_path)

model = AutoModelForSeq2SeqLM.from_pretrained(model_path)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)
print(f"🚀 Model loaded on {device} device")

@app.route('/summarize', methods=['POST'])
def summarize():
    print("\n📨 Received summarization request")
    try:
        data = request.get_json()
        input_text = data['text']
        print(f"📝 Input text received ({len(input_text)} characters)")

        print("🔧 Tokenizing input...")
        inputs = tokenizer(
            input_text,
            max_length=512,
            truncation=True,
            padding="max_length",
            return_tensors="pt"
        ).to(device)
        print("⚡ Input tensor shape:", inputs.input_ids.shape)

        print("🧠 Generating summary...")
        summary_ids = model.generate(
            inputs.input_ids,
            num_beams=4,
            max_length=300,
            early_stopping=True
        )
        
        summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
        print(f"📄 Generated summary ({len(summary)} characters)")
        print("💡 Sample summary:", summary[:100] + "...")

        return jsonify({
            "summary": summary,
            "status": "success"
        })
    
    except Exception as e:
        print(f"❌ Error processing request: {str(e)}")
        return jsonify({
            "error": str(e),
            "status": "error"
        }), 500

if __name__ == '__main__':
    print("🌐 Starting Flask server...")
    app.run(host='0.0.0.0', port=5000, debug=True)