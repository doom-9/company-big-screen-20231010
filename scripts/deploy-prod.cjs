const os = require('node:child_process').execSync
const path = require('node:path')
const Client = require('ssh2-sftp-client')
const sftp = new Client()

const project = 'big-screen-1010'

const config = {
  host: '172.16.200.115',
  port: '22',
  username: 'root',
  password: 'asdf.1234',
}

const src = '/mnt/web/'

const randomNumber = new Date().getTime()

async function main() {
  try {
    console.log('打包中...')
    os('vite build')
    await sftp.connect(config)

    console.log('上传中...')
    await sftp.uploadDir(
      path.resolve(__dirname, '../dist'),
      `${src}${project}-upload`,
    )

    await sftp.rename(`${src}${project}`, `${src}${project}-${randomNumber}`)
    await sftp.rename(`${src}${project}-upload`, `${src}${project}`)

    console.log('部署成功...')
    sftp.end()
  }
  catch (error) {
    sftp.end()
  }
}

main()
