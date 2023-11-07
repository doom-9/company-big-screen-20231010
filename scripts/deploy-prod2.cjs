const os = require('node:child_process').execSync
const path = require('node:path')
const Client = require('ssh2-sftp-client')
const sftp = new Client()

const project = 'boards'

const config = {
  host: '47.104.239.82',
  port: '201',
  username: 'root',
  password: 'rootsports@!234',
}

const src = '/opt/cbastats/web/'

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
    console.log('error',error);
    sftp.end()
  }
}

main()
