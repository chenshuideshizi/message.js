# Message.js


### (1) messageBox

```
  messageBox('default Msg')
    .then(() => {})

  messageBox({
      message: 'hello world', 
      btns: [
        {label: '确定', className: 'green'}
      ]
  })
    .then((index) => {
        console.log(index)
    })
```

### (2) Loading

```
// 显示loading
loading(true)

// 隐藏loading
loading(false)
```

### (3) toast

```
  toast('hello world')

  toast({message: 'hello world', duration: '1000})
```