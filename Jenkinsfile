node {
    cleanWs()

    checkout BbS(
        branches: [[name: "refs/heads/${env.BRANCH_NAME}"]],
        credentialsId: 'jenkins.industry',
        id: '9a586618-a470-464c-8580-358c7a93f12a',
        projectName: 'edgeweb',
        repositoryName: 'industry-ui-components',
        serverId: '5b68cbef-9a9a-41ea-86fe-0862109f93ce',
    )

    stage('Build Docs') {
        docker.image('node:14-buster').inside {
            sh 'npm ci'
            sh 'npm run docs:ci'
            sh 'npm run docs:build'
        }
    }

    if (env.BRANCH_NAME == 'master') {
        stage('Publish') {
            withCredentials([usernamePassword(credentialsId: 'nexus-creds', usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD')]) {
                sh '''#!/bin/bash
                    nexus_url=https://nexus.ci-cdindustry.lab.m.secunet.de/repository/static

                    for file in $(find "docs/styleguide" -type f -print); do

                        # Need to trim the local documentation directory part off the string
                        destination_file="${file#*docs/styleguide/}"
                        # echo "docs files: $destination_file"

                        # Upload the file (public url https://nexus.ci-cdindustry.lab.m.secunet.de/repository/static/ui-docs/index.html)
                        curl  \
                        --insecure \
                        --noproxy "*" \
                        --user "$NEXUS_USERNAME:$NEXUS_PASSWORD" \
                        --upload-file "$file" \
                        "${nexus_url}/ui-docs/${destination_file}" \
                        && echo "transfered $destination_file"

                    done
                '''
            }
        }
    }
}
