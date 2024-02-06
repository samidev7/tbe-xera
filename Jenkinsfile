pipeline {
    agent any
    environment {
     BRANCH_NAME = "${GIT_BRANCH.split('/').size() > 1 ? GIT_BRANCH.split('/')[1..-1].join('/') : GIT_BRANCH}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
    
     

        stage('Deploy') {
            steps {
                script {
                    // Define SSH command and remote paths
                    def sshCommand
                    def remoteArtifactPath
                    def branchName = env.BRANCH_NAME
                    echo "BRANCH_NAME: ${env.BRANCH_NAME}"

                    if (branchName == 'master') {
                        // Master branch deployment configuration
                        sshCommand = "sudo ssh -i $dir_path_key $dev_pipeline_blockchain_era_server_username@$dev_pipeline_blockchain_era_server_ip -p $dev_pipeline_blockchain_era_server_port"
                        remoteArtifactPath = "$dev_pipeline_blockchain_era_server_front_ws_dir"
                    } else if (branchName == 'qa') {
                        // QA branch deployment configuration
                        sshCommand = "sudo ssh -i $dir_path_key $staging_pipeline_blockchain_era_server_username@$staging_pipeline_blockchain_era_server_ip -p $staging_pipeline_blockchain_era_server_port"
                        remoteArtifactPath = "$staging_pipeline_blockchain_era_server_front_ws_dir"
                    } else {
                        error "Unsupported branch: ${branchName}"
                    }

                    // Get the repository name from the checkout URL
                    def repoName = scm.getUserRemoteConfigs()[0].getUrl().tokenize('/')[-1].replace('.git', '')

                    def folderExists

                    sshagent(['test-node-credentials-id']) {
                        folderExists = sh(
                            script: "${sshCommand} '[ -d ${remoteArtifactPath}/${repoName} ] && echo true || echo false'",
                            returnStdout: true
                        ).trim()
                    }

                    sshagent(['test-node-credentials-id']) {
                        if (folderExists == 'true') {
                         sh "${sshCommand} 'cd ${remoteArtifactPath}/${repoName} && sudo docker compose -f docker-compose.yml down'"
                         sh "${sshCommand} 'sudo rm -rf ${remoteArtifactPath}/${repoName}'"
                         sh "${sshCommand} 'git clone -b ${branchName} git@bitbucket.org:protocol33/${repoName}.git ${remoteArtifactPath}/${repoName}'"
                         sh "${sshCommand} 'cd ${remoteArtifactPath}/${repoName} &&  sudo cp $resource_folder/.env.ws .'"
                         sh "${sshCommand} 'cd ${remoteArtifactPath}/${repoName} &&  sudo mv .env.ws .env'"
                        } else {
                            sh "${sshCommand} 'git clone -b ${branchName} git@bitbucket.org:protocol33/${repoName}.git ${remoteArtifactPath}/${repoName}'"
                            sh "${sshCommand} 'cd ${remoteArtifactPath}/${repoName} &&  sudo cp $resource_folder/.env.ws .'"
                            sh "${sshCommand} 'cd ${remoteArtifactPath}/${repoName} &&  sudo mv .env.ws .env'"
                        }
                         sh "${sshCommand} 'cd ${remoteArtifactPath}/${repoName} && sudo npm install'"
                         sh "${sshCommand} 'cd ${remoteArtifactPath}/${repoName} && sudo npm run build'"
                         sh "${sshCommand} 'cd ${remoteArtifactPath}/${repoName} && sudo docker compose build'"
                         sh "${sshCommand} 'cd ${remoteArtifactPath}/${repoName} && sudo docker compose -f docker-compose.yml up -d'"
                         sh "${sshCommand} 'cd ${remoteArtifactPath}/${repoName} && sudo docker ps'"
                    }
                }
            }
        }
    }
}