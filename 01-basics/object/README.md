# object 

取得 obj.func 再呼叫，和直接呼叫 obj.func() 是不一樣的！

## 直接呼叫

```
$ deno run objMember1.js                                                        
p= Person { name: "ccc" }

```

## 取得 obj.func 再呼叫

```
$ deno run objMember2.js
error: Uncaught TypeError: Cannot set properties of undefined (setting 'name')
        this.name = name
                  ^
    at set (file:///C:/ccc/course/ws/01-basics/object/objMember2.js:3:19)       
    at file:///C:/ccc/course/ws/01-basics/object/objMember2.js:9:1
```
