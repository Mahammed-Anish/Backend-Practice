const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Mahammed_Anish_27:2g5sF2eb@cluster0.woekpl2.mongodb.net/"
);

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// git reflog
// git reset --hard <commit-hash>
// git reset --hard HEAD~2
