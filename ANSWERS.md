<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
middleware, allows us to set middleware functions, or methods onto a route or globally, so how i understnad it is, we can import middlewar and use it or we cand make custome middleware and use that, if we just want to use it on a root we put it after the path like ('/login', custmiddleware, myRoot)
if not you'd just use it without a path for expample, cors, helmet, and express.json.

2.  What does bcrypt do in order to prevent attacks?

it hashes the password, also one thing i learned, because Luis said the hashes will be the same, but i noticed by deleting and re adding passwords the hashes appear to change, this however is false, bcrypt has built in salts, and what that does is randomly generates letters and numbers and puts them into the hash... However i still do not know how this works i just kinda read abit about security and thats what i came up with.

3.  What are the three parts of the JSON Web Token?
Header, payload and signature. we did not learn much about the last one but that is what i found online
